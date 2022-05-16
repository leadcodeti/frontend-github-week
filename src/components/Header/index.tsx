/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import {
  Avatar,
  WrapItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
} from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import styles from "./styles.module.scss";
import Link from "next/link";
import { UserContext } from "../../hook/useContext";

const color = {
  white: "#ECF6F9",
  blue: "#24BFEB",
  black: "#1A1A24",
};

export function Header() {

  const { userName } = UserContext();

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img src="logo.svg" alt="Logo LeadCode" />
          <h1>&lt;LeadCode /&gt;</h1>
        </div>
        <nav>
          <HStack spacing="4">
            <a href="#">OUR SERVICE</a>
            <WrapItem>
              <Avatar
                name={userName}
                p={4}
                bg={color.white}
                border={`3px solid ${color.blue}`}
              />
            </WrapItem>
            <Menu>
              <MenuButton as="button">
                <TriangleDownIcon color={color.blue} />
              </MenuButton>
              <MenuList
                bg={color.black}
                color={color.blue}
                border="none"
                mt={4}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My Services</MenuItem>
                <MenuItem>
                   <Link href="/login">Sign Out</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </nav>
      </div>
    </header>
  );
}
