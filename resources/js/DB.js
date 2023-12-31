const modules = [
    {
        id: 1,
        label: "protocolos",
        icon: "fa-list-check",
        route: "deshboard",
    },
    {
        id: 2,
        label: "projetos",
        icon: "fa-folder-open",
        route: "deshboard",
    },
    {
        id: 3,
        label: "tarefas",
        icon: "fa-layer-group",
        route: "deshboard",
    },
    {
        id: 4,
        label: "base de dados",
        icon: "fa-database",
        route: "deshboard",
    },
];

const pages = [
    {
        id: 1,
        module_id: 1,
        label: "dashboard",
        icon: "fa-home",
        route: "dashboard",
        group: 1,
    },
    {
        id: 2,
        module_id: 1,
        label: "protocolos",
        icon: "fa-headset",
        route: "protocolos",
        group: 1,
    },
    {
        id: 3,
        module_id: 1,
        label: "indisponibilidade",
        icon: "fa-server",
        route: "",
        group: 1,
    },
    {
        id: 4,
        module_id: 1,
        label: "aprovação de pedido",
        icon: "fa-check-double",
        route: "",
        group: 1,
    },
    {
        id: 5,
        module_id: 1,
        label: "estoque técnico",
        icon: "fa-boxes-stacked",
        route: "",
        group: 1,
    },
    {
        id: 6,
        module_id: 1,
        label: "monitoriamento",
        icon: "fa-window-restore",
        route: "",
        group: 1,
    },
    {
        id: 7,
        module_id: 1,
        label: "indicadores",
        icon: "fa-chart-simple",
        route: "",
        group: 1,
    },
    {
        id: 8,
        module_id: 1,
        label: "locais",
        icon: "fa-location-dot",
        route: "",
        group: 1,
    },
    {
        id: 9,
        module_id: 1,
        label: "parceiros",
        icon: "fa-id-card-clip",
        route: "",
        group: 1,
    },
    {
        id: 10,
        module_id: 1,
        label: "contratos",
        icon: "fa-file-signature",
        route: "",
        group: 1,
    },

];

const groups =[
    {
        id: 1,
        label: "default",
        icon: ""
    },
    {
        id: 2,
        label: "Cadastros",
        icon: "fa-list"
    }
]

export default {
    pages,
    modules,
    groups,
};