
export default function SideBarSubMenu({ children, isSubMenuOn }) {


  return (

    <ul className={`transition-opacity ease-out ${isSubMenuOn ? "mt-5 translate-y-0 visible opacity-100" : "translate-y-full invisible overflow-hidden opacity-0 h-0"}`}>
      {children}
    </ul>
  );
}
