import {
	draggable as coreDraggable,
	dropTargetForElements as coreDropTargetForElements,
} from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

import { createAdapterAction } from '../../internal/create-adapter-action';

export const draggable = createAdapterAction(coreDraggable);
export const dropTargetForElements = createAdapterAction(coreDropTargetForElements);

export type {
	ElementDragPayload,
	ElementEventBasePayload,
	ElementEventPayloadMap,
	ElementDropTargetEventBasePayload,
	ElementDropTargetEventPayloadMap,
	ElementGetFeedbackArgs,
	ElementDropTargetGetFeedbackArgs,
	ElementMonitorGetFeedbackArgs,
} from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
