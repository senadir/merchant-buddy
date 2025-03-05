import { useState } from "@wordpress/element";
import { __, sprintf } from "@wordpress/i18n";
import { Command, useCommandState } from "cmdk";
import { useHotkeys } from "react-hotkeys-hook";
import {
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { CommandFooter, useCurrentEntity } from "./footer";
import { useSettings } from "./settings-context";
import "./styles.scss";

declare global {
  interface Window {
    searchBuddy: {
      main: {
        dialog: boolean;
        shortcut?: string;
      };
    };
  }
}

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const settings = useSettings();
  const shortcut = settings.main.shortcut || "command+k,ctrl+k";

  // Convert shortcut format to hotkeys format
  const hotkeyShortcut = shortcut
    .toLowerCase()
    .replace("cmd", "command")
    .replace("option", "alt");
  useHotkeys(
    hotkeyShortcut,
    (event) => {
      event.preventDefault();
      setOpen((open) => !open);
    },
    { enableOnFormTags: true },
    [hotkeyShortcut],
  );

  const navigate = useNavigate();
  // get current navigation stack from react router
  const pages = useLocation().pathname.split("/").filter(Boolean);
  const currentEntity = useCurrentEntity();

  const placeholder = pages.at(-1)
    ? // translators: %s is the last page in the navigation stack
      sprintf(__("Search %s…", "merchant-buddy"), pages.at(-1))
    : __("Select something to search", "merchant-buddy");

  // Sync up searchValue with route query params
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "";
  const setSearchValue = (value: string) =>
    setSearchParams({ search: value }, { replace: true });
  const Component = ({
    children,
    ...props
  }: { children: React.ReactNode } & React.ComponentProps<typeof Command>) =>
    window.searchBuddy.main.dialog ? (
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        container={
          document.querySelector(".merchant-buddy-container") as HTMLElement
        }
        {...props}
      >
        {children}
      </Command.Dialog>
    ) : (
      <Command {...props}>{children}</Command>
    );
  return (
    <Component
      loop
      label={__("Global Command Menu", "merchant-buddy")}
      shouldFilter={!currentEntity}
      className={window.searchBuddy.main.dialog ? "" : "search-buddy-mounted"}
      onKeyDown={(e) => {
        if (
          pages.length !== 0 &&
          searchValue.length === 0 &&
          e.key === "Backspace"
        ) {
          navigate(-2);
        }
      }}
    >
      <div>
        {pages.map((p) => (
          <div key={p} cmdk-vercel-badge="">
            {" "}
            {/* @todo refactor this to tailwind */}
            {
              p.charAt(0).toUpperCase() +
                p
                  .slice(1)
                  .toLowerCase() /* TODO: use labels from the entities object */
            }
          </div>
        ))}
      </div>
      {open && (
        <CommandInput
          placeholder={placeholder}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      )}
      <Command.List>
        <Outlet />
      </Command.List>
      <CommandFooter />
    </Component>
  );
};

const CommandInput = ({
  placeholder,
  searchValue,
  setSearchValue,
}: {
  placeholder: string;
  searchValue: string;
  setSearchValue: (value: string) => void;
}) => {
  // Collapsed view is when we don't have any items to show.
  const collapsedView = useCommandState((state) => state.filtered.count === 0);
  return (
    <div
      className={`search-buddy-input-wrapper ${collapsedView ? "has-collapsed-input" : ""}`}
    >
      <Command.Input
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        value={searchValue}
        onValueChange={setSearchValue}
        placeholder={placeholder}
      />
      <div className="search-buddy-input-portal"></div>
    </div>
  );
};
export default CommandPalette;
