import { VMState } from '@computernewb/superqemu';
import { VMDisplay } from './VMDisplay.js';

export default interface VM {
	Start(): Promise<void>;
	Stop(): Promise<void>;
	Reboot(): Promise<void>;
	Reset(): Promise<void>;
	MonitorCommand(command: string): Promise<any>;
	GetDisplay(): VMDisplay;
	GetState(): VMState;
	SnapshotsSupported(): boolean;
}
