import { Autocomplete } from '@mantine/core';
import '../App.css'


interface SimpleSelectProps {
    placeholder: string;
    options: string[];
    onChange: (value: string) => void;
}


export function SimpleSelect({ placeholder, options, onChange }: SimpleSelectProps) {
    return (
        <div className="animated-border-wrapper"> {}
            <Autocomplete
                placeholder={placeholder}
                data={options}
                withScrollArea
                onChange={onChange}
                comboboxProps={{ position: 'bottom', middlewares: { flip: false, shift: false } }}
                classNames={{
                    dropdown: 'custom-dropdown',
                    input: 'custom-input',
                }}
            />
            <span className="border-anim top"></span>
            <span className="border-anim right"></span>
            <span className="border-anim bottom"></span>
            <span className="border-anim left"></span>
        </div>
    );
}