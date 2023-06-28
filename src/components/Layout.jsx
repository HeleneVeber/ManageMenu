/* eslint-disable react/prop-types */
import { Container, Box } from '@mui/material';
import Header from './Header/Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container maxWidth="sm" sx={{ border: '1px solid' }}>
        <Box>{children}</Box>
      </Container>
    </>
  );
}
