import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';


const { persistAtom } = recoilPersist();

export const scentIdState = atom({
  key: 'scentIdState',
  default: 0,
  effects_UNSTABLE: [persistAtom]
});

export const diffuserPowerState = atom({
  key: 'diffuserPowerState',
  default: false,
  effects_UNSTABLE: [persistAtom]
});
