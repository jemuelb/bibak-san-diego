import Link from 'next/link'

const Header = () => {
    return (
        <header className="pb-3 mb-4 border-bottom">
            <Link href="/" className="d-flex align-items-center text-dark text-decoration-none">
                <span className="fs-4">BIBAK San Diego</span>
            </Link>
        </header>
    )
};

export default Header;
