import Link from "next/link"

const navItems = [
    {text: 'Overview', path: '/'},
    {text: 'Local Images', path: '/local'},
    {text: 'Remote Images', path: '/remote'},
    {text: 'Priority', path: '/priority'},
    {text: 'Size/Style', path: '/size-style'},
]

export default function HeaderNavigation(){
    return (
        <header>
            <ul style={{
                listStyleType: 'none',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                padding: '30px',
                fontSize: '20px'
                }}>
            {
                navItems.map((item) => {
                    return (
                        <Link  key={item.text} href={item.path}>
                        <li>{item.text}</li>
                        </Link>
                    )
                })
            }
            </ul>
        </header>
    )
}