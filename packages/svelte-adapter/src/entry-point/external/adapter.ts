import { dropTargetForExternal as coreDropTargetForExternal } from '@atlaskit/pragmatic-drag-and-drop/external/adapter';

import { createAdapterAction } from '../../internal/create-adapter-action';

export const dropTargetForExternal = createAdapterAction(coreDropTargetForExternal);

export type {
	ExternalDragPayload,
	NativeMediaType,
	ExternalEventBasePayload,
	ExternalEventPayloadMap,
	ExternalDropTargetEventBasePayload,
	ExternalDropTargetEventPayloadMap,
	ExternalMonitorGetFeedbackArgs,
	ExternalDropTargetGetFeedbackArgs,
} from '@atlaskit/pragmatic-drag-and-drop/external/adapter';
