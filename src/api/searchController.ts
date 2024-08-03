/* eslint-disable */
// @ts-ignore
import request from '../request.ts';
import * as API from './types';

/** doSearchAll POST /api/search/all */
export async function doSearchAllUsingPost(
  body: API.SearchRequest,
  options?: { [key: string]: unknown }
) {
  return request<API.BaseResponseSearchVO_>('/api/search/all', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
