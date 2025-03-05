/**
 * External dependencies
 */
import {
  CheckboxControl,
  ExternalLink,
  FormTokenField,
  SelectControl,
} from "@wordpress/components";
import { useCallback, useState } from "@wordpress/element";
import { __, _x } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import { createInterpolateElement } from "@wordpress/element";
import { useSettingsContext } from "./settings-context";
import { SettingsCard, SettingsSection } from "./shared-components";

interface TokenItem {
  /**
   *  The value of the token.
   */
  value: string;
  /**
   * If not falsey, will add a title to the token.
   */
  title?: string;
  /**
   * When true, renders tokens as without a background.
   */
  isBorderless?: boolean;
}

const MAC_MODIFIERS = ["Cmd", "Option", "Shift"];
const WIN_MODIFIERS = ["Ctrl", "Alt", "Shift"];

// Map arrow symbols to their directional names for storage
const ARROW_MAP: Record<string, string> = {
  "↑": "up",
  "↓": "down",
  "←": "left",
  "→": "right",
};

// Map directional names back to arrow symbols for display
const REVERSE_ARROW_MAP: Record<string, string> = {
  up: "↑",
  down: "↓",
  left: "←",
  right: "→",
};

const getModifierSymbol = (modifier: string): string => {
  const symbolMap: Record<string, string> = {
    Cmd: _x("⌘", "Command key symbol", "merchant-buddy"),
    Ctrl: _x("⌃", "Control key symbol", "merchant-buddy"),
    Option: _x("⌥", "Option key symbol", "merchant-buddy"),
    Alt: _x("⌥", "Alt key symbol", "merchant-buddy"),
    Shift: _x("⇧", "Shift key symbol", "merchant-buddy"),
  };
  return symbolMap[modifier] || modifier;
};

const getModifierLabel = (modifier: string): string => {
  const labelMap: Record<string, string> = {
    Cmd: _x("Command", "Command key name", "merchant-buddy"),
    Ctrl: _x("Control", "Control key name", "merchant-buddy"),
    Option: _x("Option", "Option key name", "merchant-buddy"),
    Alt: _x("Alt", "Alt key name", "merchant-buddy"),
    Shift: _x("Shift", "Shift key name", "merchant-buddy"),
  };
  return labelMap[modifier] || modifier;
};

const getSpecialKeyLabel = (key: string): string => {
  // Check if it's a directional name and convert to arrow symbol for label lookup
  const arrowSymbol = REVERSE_ARROW_MAP[key];
  const lookupKey = arrowSymbol || key;

  switch (lookupKey) {
    case "Space":
      return _x("Space", "Space key name", "merchant-buddy");
    case "Esc":
      return _x("Escape", "Escape key name", "merchant-buddy");
    case "↑":
      return _x("Up Arrow", "Up Arrow key name", "merchant-buddy");
    case "↓":
      return _x("Down Arrow", "Down Arrow key name", "merchant-buddy");
    case "←":
      return _x("Left Arrow", "Left Arrow key name", "merchant-buddy");
    case "→":
      return _x("Right Arrow", "Right Arrow key name", "merchant-buddy");
    case "↵":
      return _x("Enter", "Enter key name", "merchant-buddy");
    default:
      return key;
  }
};

const AVAILABLE_KEYS = [
  "Space",
  "up",
  "down",
  "left",
  "right",
  "↵",
  "Esc",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

// Convert stored value to display value
const normalizeTokenForDisplay = (token: string): string => {
  // If it's a directional name, convert to arrow symbol for display
  return REVERSE_ARROW_MAP[token] || token;
};

// Convert display/input value to storage value
const normalizeTokenForStorage = (token: string): string => {
  // If it's an arrow symbol, convert to directional name for storage
  return ARROW_MAP[token] || token;
};

const createTokenItem = (token: string, isMac: boolean): TokenItem => {
  // For display purposes, convert directional names to arrow symbols
  const displayToken = normalizeTokenForDisplay(token);

  if (MAC_MODIFIERS.includes(token) || WIN_MODIFIERS.includes(token)) {
    return {
      value: token,
      title: `${getModifierLabel(token)} ${getModifierSymbol(token)}`,
      isBorderless: true,
    };
  }

  if (
    ["Space", "Esc", "↑", "↓", "←", "→", "↵"].includes(displayToken) ||
    ["up", "down", "left", "right"].includes(token)
  ) {
    return {
      value: token,
      title: getSpecialKeyLabel(token),
      isBorderless: true,
    };
  }

  return {
    value: token,
    title: token.length === 1 ? token.toUpperCase() : token,
    isBorderless: true,
  };
};

const ShortcutRecorder = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
  const [tokens, setTokens] = useState<TokenItem[]>(() =>
    value.split("+").map((token) => createTokenItem(token, isMac)),
  );
  const platformModifiers = isMac ? MAC_MODIFIERS : WIN_MODIFIERS;

  // For suggestions, we need to show arrow symbols, not directional names
  const displaySuggestions = [
    ...platformModifiers,
    ...AVAILABLE_KEYS.map(normalizeTokenForDisplay),
  ];

  const handleChange = useCallback(
    (newTokens: (string | TokenItem)[]) => {
      // Convert strings to TokenItems and keep existing TokenItems
      const tokenValues = newTokens.map((token) => {
        const tokenValue = typeof token === "string" ? token : token.value;
        // Convert arrow symbols to directional names for storage
        return normalizeTokenForStorage(tokenValue);
      });

      // Map any cross-platform modifiers to the current platform
      const normalizedTokens = tokenValues.map((token) => {
        if (isMac) {
          if (token === "Ctrl") return "Cmd";
          if (token === "Alt") return "Option";
        } else {
          if (token === "Cmd") return "Ctrl";
          if (token === "Option") return "Alt";
        }
        return token;
      });

      // Filter out any invalid tokens and ensure proper order (modifiers first, then key)
      const validTokens = normalizedTokens.filter(
        (token) =>
          platformModifiers.includes(token) || AVAILABLE_KEYS.includes(token),
      );

      // Sort tokens so modifiers come first
      const sortedTokenValues = [
        ...validTokens.filter((token) => platformModifiers.includes(token)),
        ...validTokens.filter((token) => AVAILABLE_KEYS.includes(token)),
      ];

      // Convert to TokenItems
      const sortedTokenItems = sortedTokenValues.map((token) =>
        createTokenItem(token, isMac),
      );

      setTokens(sortedTokenItems);
      onChange(sortedTokenValues.join("+"));
    },
    [onChange, isMac],
  );

  return (
    <div>
      <FormTokenField
        label={__("Keyboard Shortcut", "merchant-buddy")}
        value={tokens}
        suggestions={displaySuggestions}
        onChange={handleChange}
        autoCapitalize="on"
        maxSuggestions={10}
        __experimentalAutoSelectFirstMatch={true}
        __experimentalExpandOnFocus={true}
        displayTransform={(token: string): string => {
          // Convert directional names to arrow symbols for display
          const displayToken = normalizeTokenForDisplay(token);

          if (platformModifiers.includes(token)) {
            return `${getModifierLabel(token)} ${getModifierSymbol(token)}`;
          }
          if (
            ["Space", "Esc", "↑", "↓", "←", "→", "↵"].includes(displayToken)
          ) {
            return getSpecialKeyLabel(token);
          }
          return token.length === 1 ? token.toUpperCase() : token;
        }}
        saveTransform={(token) => {
          // Convert arrow symbols to directional names for storage
          const storageToken = normalizeTokenForStorage(token);
          return storageToken.length === 1
            ? storageToken.toUpperCase()
            : storageToken;
        }}
      />
      <p className="components-form-token-field__help">
        {isMac
          ? createInterpolateElement(
              __(
                "Select modifiers and a key to create your shortcut. Available modifiers: <cmd/>, <option/>, <shift/>",
                "merchant-buddy",
              ),
              {
                cmd: (
                  <span>{`${getModifierLabel("Cmd")} ${getModifierSymbol("Cmd")}`}</span>
                ),
                option: (
                  <span>{`${getModifierLabel("Option")} ${getModifierSymbol("Option")}`}</span>
                ),
                shift: (
                  <span>{`${getModifierLabel("Shift")} ${getModifierSymbol("Shift")}`}</span>
                ),
              },
            )
          : createInterpolateElement(
              __(
                "Select modifiers and a key to create your shortcut. Available modifiers: <ctrl/>, <alt/>, <shift/>",
                "merchant-buddy",
              ),
              {
                ctrl: (
                  <span>{`${getModifierLabel("Ctrl")} ${getModifierSymbol("Ctrl")}`}</span>
                ),
                alt: (
                  <span>{`${getModifierLabel("Alt")} ${getModifierSymbol("Alt")}`}</span>
                ),
                shift: (
                  <span>{`${getModifierLabel("Shift")} ${getModifierSymbol("Shift")}`}</span>
                ),
              },
            )}
      </p>
    </div>
  );
};

const GeneralSettingsDescription = () => (
  <>
    <h2>{_x("General", "Admin settings", "woocommerce")}</h2>
    <p>
      {__(
        "Enable or disable the command palette on your store, and define the search provider to use. To add new providers, follow the instructions in the docs.",
        "merchant-buddy",
      )}
    </p>
    <ExternalLink href="https://github.com/senadir/merchant-buddy/">
      {__("Add new providers", "merchant-buddy")}
    </ExternalLink>
  </>
);

const GeneralSettings = () => {
  const { settings, setSettingField, readOnlySettings } = useSettingsContext();
  const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);

  const formatShortcut = (shortcut: string): string => {
    return shortcut
      .split("+")
      .map((token) => {
        // Convert directional names to arrow symbols for display
        const displayToken = normalizeTokenForDisplay(token);

        if (MAC_MODIFIERS.includes(token) || WIN_MODIFIERS.includes(token)) {
          return `${getModifierLabel(token)} ${getModifierSymbol(token)}`;
        }
        if (
          ["Space", "Esc", "↑", "↓", "←", "→", "↵"].includes(displayToken) ||
          ["up", "down", "left", "right"].includes(token)
        ) {
          return getSpecialKeyLabel(token);
        }
        return token;
      })
      .join(" + ");
  };

  return (
    <SettingsSection Description={GeneralSettingsDescription}>
      <SettingsCard>
        <CheckboxControl
          checked={settings.enabled}
          name="command_palette_enabled"
          onChange={setSettingField("enabled")}
          label={__("Enable command palette", "merchant-buddy")}
          help={
            <span>
              {createInterpolateElement(
                __(
                  "When enabled, the command palette will open when you press <span>%s</span>.",
                  "merchant-buddy",
                ).replace("%s", formatShortcut(settings.shortcut || "Cmd+K")),
                {
                  span: (
                    <span className="components-form-token-field__token">
                      {formatShortcut(settings.shortcut || "Cmd+K")}
                    </span>
                  ),
                },
              )}
            </span>
          }
          __nextHasNoMarginBottom={true}
        />
        <ShortcutRecorder
          value={settings.shortcut || "Cmd+K"}
          onChange={setSettingField("shortcut")}
        />
        <SelectControl
          label={__("Provider", "merchant-buddy")}
          name="search_provider"
          help={__(
            "Search provider for the command palette.",
            "merchant-buddy",
          )}
          options={readOnlySettings.available_providers.map((provider) => ({
            label: provider.name,
            value: provider.key,
          }))}
          value={settings.provider}
          onChange={setSettingField("provider")}
          disabled={false}
          __nextHasNoMarginBottom={true}
        />
      </SettingsCard>
    </SettingsSection>
  );
};

export default GeneralSettings;
