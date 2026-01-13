import { dropTargetForTextSelection as coreDropTargetForTextSelection } from '@atlaskit/pragmatic-drag-and-drop/text-selection/adapter';

import { createAdapterAction } from '../../internal/create-adapter-action';

export const dropTargetForTextSelection = createAdapterAction(coreDropTargetForTextSelection);

export type {
	TextSelectionDragPayload,
	TextSelectionEventBasePayload,
	TextSelectionEventPayloadMap,
	TextSelectionDropTargetEventBasePayload,
	TextSelectionDropTargetEventPayloadMap,
	TextSelectionMonitorGetFeedbackArgs,
	TextSelectionDropTargetGetFeedbackArgs,
} from '@atlaskit/pragmatic-drag-and-drop/text-selection/adapter';
