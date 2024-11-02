import {ProcessManager} from "./classes/processManager/ProcessManager";

function main():void {
    ProcessManager.Shutdown(.25);
}
main();

// ProcessManager.GetPIDByName("Terminal", (pid) => {
//     if (pid === null) {
//         console.log("No se encontró el proceso");
//     } else {
//         console.log(`PID encontrado: ${pid}`);
//     }
// });
// ProcessManager.ListProcess();
// ProcessManager.KillProcess("Terminal");
// ProcessManager.OpenProcess("Terminal");