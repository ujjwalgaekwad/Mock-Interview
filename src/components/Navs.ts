interface NavItem {
    label: string;
    slug: string;
}

const Navs: NavItem[] = [
    {
        label: "Home",
        slug: "/"
    },
    {
        label: "Contact US",
        slug: "/contactus",
    },
    {
        label: "Services",
        slug: "/services"
    }
];

export default Navs;
