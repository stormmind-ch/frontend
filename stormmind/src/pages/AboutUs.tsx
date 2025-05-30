import { ContributorCard } from "../components/ContributorCard.tsx";
import { Center } from "@mantine/core";

function AboutUs() {
    return (
        <Center style={{ paddingTop: '150px' }}>
            <p>Chum endlich man</p>
            <div
                style={{
                    display: 'flex',
                    gap: '40px',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                }}
            >
                <div style={{ maxWidth: '500px' }}>
                <ContributorCard
                    name="Nils Gämperli"
                    linkedin="https://www.linkedin.com/in/nils-gaemperli"
                    github="https://github.com/nelson0101"
                    imageUrl="images/nils.png"
                    text="Likes Beer"
                />
            </div>
                <div style={{ maxWidth: '500px' }}>
                <ContributorCard
                    name="Damian Ueltschi"
                    linkedin="https://www.linkedin.com/in/damian-ueltschi-4164a7233/"
                    github="https://github.com/duke-j"
                    imageUrl="images/damian.png"
                    text="Likes Beer"

                />
                </div>
            </div>
        </Center>
    );
}

export { AboutUs };
