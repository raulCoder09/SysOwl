import * as os from "os"
export class OperativeSystemDetection {
    public static DetectOperativeSystem():string {
        const platform=os.platform();
        let operativeSystem:string;
        switch (platform) {
            case "win32":
                operativeSystem = "WindowsOS";
                break;
            case "linux":
                operativeSystem = "LinuxOS";
                break;
            case "darwin":
                operativeSystem = "MacOS";
                break;
            default:
                operativeSystem = "unknown platform";
                break;
        }
        return operativeSystem;
    }
}