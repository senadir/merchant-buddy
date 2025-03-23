import { Command, useCommandState } from "cmdk";
import { useState, useEffect } from "@wordpress/element";
import { sprintf, __ } from "@wordpress/i18n";
import "./styles.scss";
import {
  Outlet,
  useLocation,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import { CommandFooter, useCurrentEntity } from "./footer";
import { useHotkeys } from "react-hotkeys-hook";

const CommandPalette = () => {
  const [open, setOpen] = useState(false);

  // Get the custom shortcut from settings
  const customShortcut = window.searchBuddy?.main?.shortcut || "meta+k";

  // Use react-hotkeys-hook to handle the custom shortcut
  useHotkeys(
    customShortcut,
    (e) => {
      e.preventDefault();
      setOpen((_open: boolean) => !_open);
    },
    {
      enableOnFormTags: true,
      preventDefault: true,
    },
    [],
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
      <CommandInput
        placeholder={placeholder}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
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
