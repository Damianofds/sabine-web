import Image from "next/image";
import { TalkyUI } from "../lib/talkyui";
import { Pacifico } from 'next/font/google';

const roboto = Pacifico({
    weight: ['400'],
    subsets: ['latin'],
});

const backendConfig = {
    openaiKey: process.env.TALKY_OPENAI_API_KEY,
    qaUrl: process.env.TALKY_QA_API_URL,
    audioUploadUrl: process.env.TALKY_AUDIO_UPLOAD_API_URL,
    documentUploadurl: process.env.TALKY_DOCUMENT_UPLOAD_API_URL,
};

export default function Home() {
    return (
        <div>
            <main style={{
                        margin: "0 auto",
                        width: "80vw",
                        minWidth: "355px",
                        maxWidth: "800px",
                        height: "95vh",
                    }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                }}>
                    <div style={{
                            width: "100px",
                            height: "100px",
                            position: "relative"
                        }}>
                            <Image
                                src="/sabine-logo.png"
                                alt="Sabine.bot logo"
                                fill={true}
                                priority
                            />
                    </div>
                    <div
                        className={roboto.className}
                        style={{
                            fontSize: "36px",
                            color: "rgb(78, 166, 153)",
                            width: "80%",
                            display: "flex",
                            justifyContent: "left",
                        }}>
                        Sabine.bot
                    </div>
                </div>
                <div
                    style={{
                        height: "80dvh",
                        backgroundImage: "url('azulejos-light.png')",
                        backgroundRepeat: "round",
                        backgroundSize:"200px",
                        padding: "3vh 1vw 0vh"

                    }}>
                    <TalkyUI
                        initTalkURL="/talk-showcase.json"
                        backendConfiguration={backendConfig} />
                    {/* <ClearStorageButton color="red" /> */}
                </div>
            </main>
            <footer>
                <div style={{
                        textAlign: "center"
                    }}>
                    made by{" "}
                    <a target="_blank" href="https://damianofds.github.io">
                        fds
                    </a>
                </div>
            </footer>
            
        </div>
    );
}
