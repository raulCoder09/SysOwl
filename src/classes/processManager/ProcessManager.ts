import { exec } from "child_process";
import { OperativeSystemDetection } from "../operativeSystemDetection/OperativeSystemDetection";

export class ProcessManager {

    static executeCommand(command: string): Promise<string> {
        return new Promise((resolve, reject) => {
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    reject(error);
                    return;
                }
                if (stderr) {
                    reject(new Error(stderr));
                    return;
                }
                resolve(stdout.trim());
            });
        });
    }

    static ListProcess() {
        switch (OperativeSystemDetection.DetectOperativeSystem()) {
            case "WindowsOS":
                this.executeCommand("tasklist")
                    .then(response => console.log(response))
                    .catch(error => console.error(`Error listing processes: ${error.message}`));
                break;
            case "linuxOS":
                break;
            case "MacOS":
                this.executeCommand("ps -ax -o pid,comm")
                    .then(response => console.log(response))
                    .catch(error => console.error(`Error listing processes: ${error.message}`));
                break;
            default:
                console.error("Unsupported OS");
                break;
        }
    }

    static GetPIDByName(Name: string, callback: (pid: number | null) => void): void {
        this.executeCommand(`pgrep -f "${Name}"`)
            .then(stdout => {
                const pid: number = parseInt(stdout);
                if (isNaN(pid)) {
                    console.error(`No PID found for process with name: ${Name}`);
                    callback(null);
                } else {
                    callback(pid);
                }
            })
            .catch(error => {
                console.error(`Error getting process PID: ${error.message}`);
                callback(null);
            });
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
                command = `open -a ${processName}`;
                break;
            default:
                console.error("Unsupported operating system");
                return;
        }
    }

    static KillProcess(processName: string): void;
    static KillProcess(pid: number): void;
    static KillProcess(parameter:string | number):void{
        switch (OperativeSystemDetection.DetectOperativeSystem()) {
            case "WindowsOS":
                this.executeCommand(`taskkill /F /IM ${parameter}.exe`)
                    .then(response => console.log(response))
                    .catch(error => console.error(error));
                break
            case "linuxOS":
                break;
            case "MacOS":
                if (typeof parameter === 'string') {
                    this.executeCommand(`pkill ${parameter}`)
                        .then(response => console.log(response))
                        .catch(error => console.error(error));
                } else {
                    this.executeCommand(`kill -9 ${parameter}`)
                        .then(response => console.log(response))
                        .catch(error => console.error(error));
                }
                break;
            default:
                break;
        }
    }

    static Shutdown(time: number) {
        switch (OperativeSystemDetection.DetectOperativeSystem()) {
            case "WindowsOS":
                this.executeCommand(`shutdown /s /f /t ${time}`)
                    .then(response => console.log(response))
                    .catch(error => console.error(error));
                break
            case "linuxOS":
                break;
            case "MacOS":
                this.executeCommand(`sudo shutdown -h +${Math.ceil(time / 60)}`)
                    .then(response => console.log(response))
                    .catch(error => console.error(error));
                break;
            default:
                break;
        }

    }
    
    
}
