import { Avatar, Dropdown, Navbar, Text } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/pasisiadev.png";
import { useRouter } from "next/router";
export default function NavbarC() {
  const route = useRouter();
  const navigation = [
    {
      title: "Project",
      href: "/project",
      icon: (props) => (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            opacity="0.4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 4H18C19.0766 4 19.9545 4.85059 19.9983 5.91638H14.8997C13.7951 5.91638 12.8997 6.81181 12.8997 7.91638V17H4V6C4 4.89543 4.89543 4 6 4Z"
          />
          <path d="M14 9C14 7.89543 14.8954 7 16 7H20C21.1046 7 22 7.89543 22 9V18C22 19.1046 21.1046 20 20 20H16C14.8954 20 14 19.1046 14 18V9Z" />
          <path d="M13 17H3.5C2.67157 17 2 17.6716 2 18.5C2 19.3284 2.67157 20 3.5 20H13V17Z" />
        </svg>
      ),
    },
    {
      title: "Team",
      href: "/team",
      icon: (props) => (
        <svg
          fill="currentColor"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <circle opacity="0.4" cx="15" cy="8" r="3" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.115 18.9483C16.6788 18.3718 17.0001 17.7073 17.0001 17C17.0001 15.2987 15.1413 13.8455 12.521 13.2672C13.2766 13.0956 14.116 13 15.0001 13C18.3138 13 21.0001 14.3431 21.0001 16C21.0001 17.4664 18.896 18.687 16.115 18.9483Z"
          />
          <ellipse opacity="0.4" cx="10" cy="17" rx="7" ry="4" />
          <circle cx="10" cy="7" r="4" />
        </svg>
      ),
    },
    {
      title: "Contact",
      href: "/contact",
      icon: (props) => (
        <svg
          {...props}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M2 7C2 4.79086 3.79086 3 6 3H18C20.2091 3 22 4.79086 22 7V17C22 19.2091 20.2091 21 18 21H6C3.79086 21 2 19.2091 2 17V7Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.37604 7.58405C5.60581 7.23941 6.07146 7.14628 6.4161 7.37604L10.1973 9.89684C11.289 10.6246 12.7112 10.6246 13.8029 9.89684L17.5841 7.37604C17.9287 7.14628 18.3944 7.23941 18.6241 7.58405C18.8539 7.9287 18.7608 8.39435 18.4161 8.62412L14.6349 11.1449C13.0394 12.2086 10.9608 12.2086 9.36525 11.1449L5.58405 8.62412C5.23941 8.39435 5.14628 7.9287 5.37604 7.58405Z"
          />
        </svg>
      ),
    },
  ];
  return (
    <Navbar className="px-16 fixed border-b-2" shouldHideOnScroll variant="sticky">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Link href={"/"} title={"Beranda Pasisia Developers"}>
          <Image height={50} src={Logo} alt={"#"} />
        </Link>
      </Navbar.Brand>
      <Navbar.Content
        className="lg:flex gap-6 text-[#626468] font-medium hidden"
        enableCursorHighlight
        hideIn="xs"
        variant="highlight"
      >
        {navigation.map((e, i) => {
          return (
            <Link
              className={
                route.pathname === e.href
                  ? "text-black font-bold"
                  : "hover:text-black"
              }
              key={i}
              href={e.href}
            >
              <div className="flex gap-2 justify-center items-center">
                <e.icon className="h-6 w-6" />
                {e.title}
              </div>
            </Link>
          );
        })}
      </Navbar.Content>
      <Navbar.Content
        className="lg:hidden"
        css={{
          "@xs": {
            w: "12%",
            jc: "flex-end",
          },
        }}
      >
        {/* <Dropdown placement="bottom-right">
          <Navbar.Item>
            <Dropdown.Trigger>
              <Avatar
                bordered
                as="button"
                color="warning"
                size="md"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </Dropdown.Trigger>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="User menu actions"
            color="warning"
            onAction={(actionKey) => route.push(`/${actionKey}`)}
          >
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b color="inherit" css={{ d: "flex" }}>
                Signed in as
              </Text>
              <Text b color="inherit" css={{ d: "flex" }}>
                zoey@example.com
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
              Ganti Nama
            </Dropdown.Item>
            <Dropdown.Item key="s">Ganti Password</Dropdown.Item>
            <Dropdown.Item key="login" withDivider color="error">
              Login
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </Navbar.Content>
      <Navbar.Collapse disableAnimation>
        {navigation.map((e, i) => (
          <Navbar.CollapseItem
            key={i}
            activeColor="warning"
            css={{
              color: i === navigation.length - 1 ? "$error" : "",
            }}
            isActive={i === 2}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={e.href}
            >
              <div className="flex gap-2 justify-center items-center">
                <e.icon className="h-6 w-6" />
                {e.title}
              </div>
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
