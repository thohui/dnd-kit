import type {Without} from '@thohui/dnd-kit-utilities';

export type SyntheticEventName = keyof Without<
  React.DOMAttributes<any>,
  'children' | 'dangerouslySetInnerHTML'
>;
