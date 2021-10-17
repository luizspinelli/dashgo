import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink name="Dashboard" icon={RiDashboardLine} />
          <NavLink name="Usuario" icon={RiContactsLine} />
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <NavLink name="Formulários" icon={RiInputMethodLine} />
          <NavLink name="Automação" icon={RiGitMergeLine} />
        </NavSection>
      </Stack>
    </Box>
  );
}
