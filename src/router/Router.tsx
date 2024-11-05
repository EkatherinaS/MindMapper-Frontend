import { createRoutesFromElements, Route } from 'react-router-dom';
import { SubjectMap, SubjectUnit } from '../pages';
import { ROUTER_PATH } from '../shared';

export const Router = createRoutesFromElements(
  <>
    <Route index element={<SubjectMap />}/>
    <Route
      element={<SubjectUnit />}
      path={ROUTER_PATH.SUBJECT_UNIT}
    />
  </>,
);


