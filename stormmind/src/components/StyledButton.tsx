import { Button } from "@mantine/core";

interface StyledButtonProps {
    text: string;
    url: string;
}

export function StyledButton({ text, url }: StyledButtonProps) {
    const handleClick = () => {
        window.open(url, '_blank'); // oder '_self' für gleichen Tab
    };

    return (
        <Button
            id="btn"
            styles={{
                root: {
                    padding: '10px 20px',
                    textTransform: 'uppercase',
                    borderRadius: '8px',
                    fontSize: '17px',
                    fontWeight: 500,
                    color: '#000000',
                    background: 'transparent',
                    border: '1px solid #ffffff80',
                    cursor: 'pointer',
                    transition: '0.5s ease',
                    userSelect: 'none',
                    boxShadow: 'transparent',
                },
            }}
            onClick={handleClick}
            onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.color = '#ffffff80';
                el.style.background = '#008cff';
                el.style.border = '1px solid #008cff';
                el.style.textShadow = '0 0 2px #ffffff, 0 0 4px #ffffff';
                el.style.boxShadow =
                    '0 0 4px #008cff, 0 0 8px #008cff, 0 0 12px #008cff';
            }}
            onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.color = '#000000';
                el.style.background = 'transparent';
                el.style.border = '1px solid #ffffff80';
                el.style.textShadow = 'none';
                el.style.boxShadow = 'transparent';
            }}
        >
            {text}
        </Button>
    );
}