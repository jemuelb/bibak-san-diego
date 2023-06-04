import {Header, createStyles, rem} from '@mantine/core';
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
    brand: {
        fontSize: theme.headings.sizes.h2.fontSize,
        margin: "1em",
        padding: "1rem",
    }
}));

const TopNav = () => {
    const {classes} = useStyles();

    return (
        <Header height={rem(60)}>
            <Link href="/" className="d-flex align-items-center text-dark text-decoration-none">
                <span className={classes.brand}>BIBAK San Diego</span>
            </Link>
        </Header>
    )
};

export default TopNav;
