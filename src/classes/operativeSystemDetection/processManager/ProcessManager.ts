import { exec } from "node:child_process";
import {OperativeSystemDetection} from "../OperativeSystemDetection";

export class ProcessManager {
    static executeCommand(command: string): Promise<string> {
        return new Promise((resolve, reject) => {
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    reject(`Error executing command: ${error.message}`);
                } else if (stderr) {
                    resolve(`stderr: ${stderr}`);
                } else {
                    resolve(`response:\n${stdout}`);
                }
            });
        });
    }

    static ListProcess() {
        if (OperativeSystemDetection.DetectOperativeSystem()=="WindowsOS"){
            this.executeCommand("tasklist")
                .then(response => console.log(response))
                .catch(error => console.error(error));
        }
    }

    static KillProcess(processName: string) {
        if (OperativeSystemDetection.DetectOperativeSystem()=="WindowsOS"){
            const command = `taskkill /F /IM ${processName}.exe`;
            this.executeCommand(command)
                .then(response => console.log(response))
                .catch(error => console.error(error));
        }
    }

    static OpenProcess(processName: string) {
        let command: string;

        switch (OperativeSystemDetection.DetectOperativeSystem()) {
            case "WindowsOS":
                command = `start ${processName}`;
                break;
            case "LinuxOS":
                command = `xdg-open ${processName}`;
                break;
            case "MacOS":
                command = `open ${processName}`;
                break;
            default:
                console.error("Unsupported operating system");
                return;
        }

        this.executeCommand(command)
            .then(response => console.log(response))
            .catch(error => console.error(error));
    }
    static Shutdown(time: number) {
        const command = `shutdown /s /f /t ${time}`;
        this.executeCommand(command)
            .then(response => console.log(response))
            .catch(error => console.error(error));
    }
}
