import { createTypedHooks } from 'easy-peasy';
import { StoreModel } from '../interface/index';

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;
// export const useStoreDispatch = typedHooks.useStoreDispatch;