import { Box } from "@chakra-ui/core";

export default ({ children }) => (
  <Box
    background="lightgray"
    textAlign="center"
    height="3rem"
    lineHeight="3rem"
    fontWeight="bold"
  >
    <h2>{children}</h2>
  </Box>
);
