/* eslint-disable */
// @ts-ignore
import request from '../request.ts';
import * as API from './types';

/** listPictureByPage POST /api/picture/list/page/vo */
export async function listPictureByPageUsingPost(
  body: API.PictureQueryRequest,
  options?: { [key: string]: unknown }
) {
  return request<API.BaseResponsePagePicture_>('/api/picture/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
