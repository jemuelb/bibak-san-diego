import {Header, createStyles, rem} from '@mantine/core';
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
    brand: {
        fontSize: theme.headings.sizes.h2.fontSize,
        margin: "1em",
        padding: "1rem",
        textDecoration: "none",
        color: theme.black,
    }
}));

const TopNav = () => {
    const {classes} = useStyles();

    return (
        <Header height={rem(60)}>
            <Link href="/" className={classes.brand}>
                BIBAK San Diego
            </Link>
        </Header>
    )
};

export default TopNav;
