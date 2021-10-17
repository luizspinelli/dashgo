import { Icon, Link, Text, LinkProps } from "@chakra-ui/react";
import React from "react";

interface NavLinkProps extends LinkProps {
  name: string;
  icon: React.ElementType;
}

export function NavLink({ name, icon, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="bold">
        {name}
      </Text>
    </Link>
  );
}
