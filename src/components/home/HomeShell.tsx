"use client";

import { useMemo, useState } from "react";
import styles from "./HomeShell.module.css";

type NavKey =
  | "dashboard"
  | "health-record"
  | "activity"
  | "statistics"
  | "goals"
  | "health-insights"
  | "profile"
  | "setting"
  | "logout";

type NavItem = {
  key: NavKey;
  label: string;
  description: string;
  group:
    | "Health Tracking"
    | "Analytics"
    | "User";
  icon: (props: { className?: string }) => React.ReactNode;
};

function IconGrid({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h7v7H4V4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 4h7v7h-7V4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 13h7v7H4v-7z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 13h7v7h-7v-7z" />
    </svg>
  );
}

function IconFileText({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V8l-5-6z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 2v6h6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17h6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h2" />
    </svg>
  );
}

function IconActivity({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12h4l2-7 4 14 2-7h6"
      />
    </svg>
  );
}

function IconChart({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 19V5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 19h16" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 15l3-3 3 2 5-6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 8h1" />
    </svg>
  );
}

function IconTarget({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
    </svg>
  );
}

function IconSparkles({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l1.2 4.2L17 8l-3.8 1.8L12 14l-1.2-4.2L7 8l3.8-1.8L12 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l.8 2.6L8 16l-2.2 1.4L5 20l-.8-2.6L2 16l2.2-1.4L5 12z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 12l.7 2.3L22 15.5l-2.3 1.2L19 19l-.7-2.3L16 15.5l2.3-1.2L19 12z" />
    </svg>
  );
}

function IconUser({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 21a8 8 0 10-16 0" />
      <circle cx="12" cy="8" r="4" />
    </svg>
  );
}

function IconSettings({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.4 15a7.9 7.9 0 000-6l-2 1.2a6 6 0 01-1.3-1.3l1.2-2a7.9 7.9 0 00-6 0l1.2 2a6 6 0 01-1.3 1.3L9 9a7.9 7.9 0 000 6l2-1.2a6 6 0 011.3 1.3l-1.2 2a7.9 7.9 0 006 0l-1.2-2a6 6 0 011.3-1.3l2 1.2z"
      />
    </svg>
  );
}

function IconLogout({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 17l-1 1a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h1a2 2 0 012 2l1 1" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12l-3-3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12l-3 3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12h-5" />
    </svg>
  );
}

export default function HomeShell() {
  const items: NavItem[] = useMemo(
    () => [
      {
        key: "dashboard",
        label: "Dashboard",
        description: "Overview of today’s health signals.",
        group: "Health Tracking",
        icon: IconGrid,
      },
      {
        key: "health-record",
        label: "Health Record",
        description: "Vitals, meds, allergies, visits.",
        group: "Health Tracking",
        icon: IconFileText,
      },
      {
        key: "activity",
        label: "Activity",
        description: "Steps, workouts, sleep, recovery.",
        group: "Health Tracking",
        icon: IconActivity,
      },
      {
        key: "statistics",
        label: "Statistics",
        description: "Trends across time and categories.",
        group: "Analytics",
        icon: IconChart,
      },
      {
        key: "goals",
        label: "Goals",
        description: "Set and track health milestones.",
        group: "Analytics",
        icon: IconTarget,
      },
      {
        key: "health-insights",
        label: "Health Insights",
        description: "Personalized recommendations.",
        group: "Analytics",
        icon: IconSparkles,
      },
      {
        key: "profile",
        label: "Profile",
        description: "Your account and personal info.",
        group: "User",
        icon: IconUser,
      },
      {
        key: "setting",
        label: "Setting",
        description: "Preferences and app configuration.",
        group: "User",
        icon: IconSettings,
      },
      {
        key: "logout",
        label: "Logout",
        description: "Sign out of this session.",
        group: "User",
        icon: IconLogout,
      },
    ],
    [],
  );

  const [active, setActive] = useState<NavKey>("dashboard");
  const activeItem = items.find((i) => i.key === active) ?? items[0];

  const grouped = useMemo(() => {
    return {
      "Health Tracking": items.filter((i) => i.group === "Health Tracking"),
      Analytics: items.filter((i) => i.group === "Analytics"),
      User: items.filter((i) => i.group === "User"),
    } satisfies Record<NavItem["group"], NavItem[]>;
  }, [items]);

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar} aria-label="Primary navigation">
        <div className={styles.brand}>
          <div className={styles.brandMark} aria-hidden="true" />
          <div className={styles.brandTitle}>
            <strong>Health Care</strong>
            <span>Track • Analyze • Improve</span>
          </div>
        </div>

        <nav className={styles.navGroups}>
          <div>
            <div className={styles.groupLabel}>Health Tracking</div>
            {grouped["Health Tracking"].map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setActive(item.key)}
                className={[
                  styles.navItem,
                  active === item.key ? styles.navItemActive : "",
                ].join(" ")}
              >
                <span aria-hidden="true">
                  {item.icon({ className: styles.navIcon })}
                </span>
                <span className={styles.navText}>
                  <strong>{item.label}</strong>
                  <span>{item.description}</span>
                </span>
              </button>
            ))}
          </div>

          <div>
            <div className={styles.groupLabel}>Analytics</div>
            {grouped.Analytics.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setActive(item.key)}
                className={[
                  styles.navItem,
                  active === item.key ? styles.navItemActive : "",
                ].join(" ")}
              >
                <span aria-hidden="true">
                  {item.icon({ className: styles.navIcon })}
                </span>
                <span className={styles.navText}>
                  <strong>{item.label}</strong>
                  <span>{item.description}</span>
                </span>
              </button>
            ))}
          </div>

          <div>
            <div className={styles.groupLabel}>User</div>
            {grouped.User.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setActive(item.key)}
                className={[
                  styles.navItem,
                  active === item.key ? styles.navItemActive : "",
                ].join(" ")}
              >
                <span aria-hidden="true">
                  {item.icon({ className: styles.navIcon })}
                </span>
                <span className={styles.navText}>
                  <strong>{item.label}</strong>
                  <span>{item.description}</span>
                </span>
              </button>
            ))}
          </div>
        </nav>
      </aside>

      <main className={styles.content}>
        <header className={styles.header}>
          <div className={styles.title}>
            <h1>{activeItem.label}</h1>
            <p>{activeItem.description}</p>
          </div>
        </header>

        <section className={styles.cards} aria-label="Content">
          <article className={styles.card}>
            <h3>Quick summary</h3>
            <p>
              This is placeholder content for <strong>{activeItem.label}</strong>.
              Next step: wire each menu item to real pages/routes or feature
              components.
            </p>
          </article>

          <article className={styles.card}>
            <h3>Next actions</h3>
            <p>
              Add real data (API), charts, and forms here. If you want, I can turn
              each drawer item into a real route like <code>/dashboard</code>,
              <code>/goals</code>, etc.
            </p>
          </article>
        </section>
      </main>

      <nav className={styles.mobileDock} aria-label="Mobile navigation">
        {items.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => setActive(item.key)}
            title={item.label}
            aria-label={item.label}
            className={[
              styles.dockItem,
              active === item.key ? styles.dockItemActive : "",
            ].join(" ")}
          >
            <span aria-hidden="true">
              {item.icon({ className: styles.dockIcon })}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
}

