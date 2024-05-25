// @ts-ignore
/* eslint-disable */
import request from '../../request.ts';

/** listPictureByPage POST /api/picture/list/page/vo */
export async function listPictureByPageUsingPost(
  body: API.PictureQueryRequest,
  options?: { [key: string]: any },
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
