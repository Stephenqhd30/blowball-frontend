// @ts-ignore
/* eslint-disable */
import request from '../../request.ts';

/** doSearchAll POST /api/search/all */
export async function doSearchAllUsingPost(
  body: API.SearchRequest,
  options?: { [key: string]: any },
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
