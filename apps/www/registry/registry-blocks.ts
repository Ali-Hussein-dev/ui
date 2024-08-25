import { Registry } from "@/registry/schema"

export const blocks: Registry = [
  {
    name: "charts-01",
    type: "registry:block",
    registryDependencies: ["chart"],
    files: ["block/charts-01.tsx"],
    category: "Application",
    subcategory: "Charts",
  },
  {
    name: "dashboard-05",
    type: "registry:block",
    registryDependencies: [
      "badge",
      "breadcrumb",
      "button",
      "card",
      "dropdown-menu",
      "input",
      "pagination",
      "progress",
      "separator",
      "sheet",
      "table",
      "tabs",
      "tooltip",
    ],
    files: ["block/dashboard-05.tsx"],
    category: "Application",
    subcategory: "Dashboard",
  },
  {
    name: "dashboard-06",
    type: "registry:block",
    registryDependencies: [
      "badge",
      "breadcrumb",
      "button",
      "card",
      "dropdown-menu",
      "input",
      "sheet",
      "table",
      "tabs",
      "tooltip",
    ],
    files: ["block/dashboard-06.tsx"],
    category: "Application",
    subcategory: "Dashboard",
  },
  {
    name: "dashboard-07",
    type: "registry:block",
    registryDependencies: [
      "badge",
      "breadcrumb",
      "button",
      "card",
      "dropdown-menu",
      "input",
      "pagination",
      "progress",
      "separator",
      "sheet",
      "table",
      "tabs",
      "tooltip",
    ],
    files: ["block/dashboard-07.tsx"],
    category: "Application",
    subcategory: "Dashboard",
  },
  {
    name: "dashboard-04",
    type: "registry:block",
    registryDependencies: ["button", "card", "dropdown-menu", "input"],
    files: ["block/dashboard-04.tsx"],
    category: "Application",
    subcategory: "Dashboard",
  },
  {
    name: "dashboard-03",
    type: "registry:block",
    registryDependencies: [
      "badge",
      "button",
      "drawer",
      "input",
      "label",
      "select",
      "textarea",
      "tooltip",
    ],
    files: ["block/dashboard-03.tsx"],
    category: "Application",
    subcategory: "Dashboard",
  },
  {
    name: "dashboard-02",
    type: "registry:block",
    registryDependencies: ["badge", "button", "card", "dropdown-menu", "input"],
    files: ["block/dashboard-02.tsx"],
    category: "Application",
    subcategory: "Dashboard",
  },
  {
    name: "dashboard-01",
    type: "registry:block",
    registryDependencies: ["button", "dropdown-menu", "input", "sheet"],
    files: ["block/dashboard-01.tsx"],
    category: "Application",
    subcategory: "Dashboard",
  },
  {
    name: "authentication-01",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: ["block/authentication-01.tsx"],
    category: "Authentication",
    subcategory: "Login",
  },
  {
    name: "authentication-02",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: ["block/authentication-02.tsx"],
    category: "Authentication",
    subcategory: "Login",
  },
  {
    name: "authentication-03",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: ["block/authentication-03.tsx"],
    category: "Authentication",
    subcategory: "Login",
  },
  {
    name: "authentication-04",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: ["block/authentication-04.tsx"],
    category: "Authentication",
    subcategory: "Login",
  },
]