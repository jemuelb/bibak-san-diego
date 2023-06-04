import {Header, createStyles, Container, rem} from '@mantine/core';
import Link from 'next/link'

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
    brand: {
        fontSize: theme.headings.sizes.h2.fontSize,
        textDecoration: "none",
        color: theme.black,
    },

    inner: {
        height: HEADER_HEIGHT,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
}));

const TopNav = () => {
    const {classes} = useStyles();

    return (
        <Header height={HEADER_HEIGHT}>
            <Container>
                <Link href="/" className={classes.brand}>
                    BIBAK San Diego
                </Link>
            </Container>
        </Header>
    )
};

export default TopNav;
