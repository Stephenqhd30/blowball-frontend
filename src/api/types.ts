/* eslint-disable */
// @ts-ignore

export type BaseResponseBoolean_ = {
  code?: number;
  data?: boolean;
  message?: string;
};

export type BaseResponseInt_ = {
  code?: number;
  data?: number;
  message?: string;
};

export type BaseResponseLoginUserVO_ = {
  code?: number;
  data?: LoginUserVO;
  message?: string;
};

export type BaseResponseLong_ = {
  code?: number;
  data?: number;
  message?: string;
};

export type BaseResponsePagePicture_ = {
  code?: number;
  data?: PagePicture_;
  message?: string;
};

export type BaseResponsePagePost_ = {
  code?: number;
  data?: PagePost_;
  message?: string;
};

export type BaseResponsePagePostVO_ = {
  code?: number;
  data?: PagePostVO_;
  message?: string;
};

export type BaseResponsePageUser_ = {
  code?: number;
  data?: PageUser_;
  message?: string;
};

export type BaseResponsePageUserVO_ = {
  code?: number;
  data?: PageUserVO_;
  message?: string;
};

export type BaseResponsePostVO_ = {
  code?: number;
  data?: PostVO;
  message?: string;
};

export type BaseResponseSearchVO_ = {
  code?: number;
  data?: SearchVO;
  message?: string;
};

export type BaseResponseString_ = {
  code?: number;
  data?: string;
  message?: string;
};

export type BaseResponseUser_ = {
  code?: number;
  data?: User;
  message?: string;
};

export type BaseResponseUserVO_ = {
  code?: number;
  data?: UserVO;
  message?: string;
};

export type DeleteRequest = {
  id?: number;
};

export type getPostVOByIdUsingGETParams = {
  /** id */
  id?: number;
};

export type getUserByIdUsingGETParams = {
  /** id */
  id?: number;
};

export type getUserVOByIdUsingGETParams = {
  /** id */
  id?: number;
};

export type LoginUserVO = {
  createTime?: string;
  id?: number;
  token?: string;
  updateTime?: string;
  userAvatar?: string;
  userEmail?: string;
  userName?: string;
  userPhone?: string;
  userProfile?: string;
  userRole?: string;
};

export type OrderItem = {
  asc?: boolean;
  column?: string;
};

export type PagePicture_ = {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: Picture[];
  searchCount?: boolean;
  size?: number;
  total?: number;
};

export type PagePost_ = {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: Post[];
  searchCount?: boolean;
  size?: number;
  total?: number;
};

export type PagePostVO_ = {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: PostVO[];
  searchCount?: boolean;
  size?: number;
  total?: number;
};

export type PageUser_ = {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: User[];
  searchCount?: boolean;
  size?: number;
  total?: number;
};

export type PageUserVO_ = {
  countId?: string;
  current?: number;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  pages?: number;
  records?: UserVO[];
  searchCount?: boolean;
  size?: number;
  total?: number;
};

export type Picture = {
  title?: string;
  url?: string;
};

export type PictureQueryRequest = {
  current?: number;
  pageSize?: number;
  searchText?: string;
  sortField?: string;
  sortOrder?: string;
};

export type Post = {
  content?: string;
  createTime?: string;
  favourNum?: number;
  id?: number;
  isDelete?: number;
  tags?: string;
  thumbNum?: number;
  title?: string;
  updateTime?: string;
  userId?: number;
};

export type PostAddRequest = {
  content?: string;
  tags?: string[];
  title?: string;
};

export type PostEditRequest = {
  content?: string;
  id?: number;
  tags?: string[];
  title?: string;
};

export type PostFavourAddRequest = {
  postId?: number;
};

export type PostFavourQueryRequest = {
  current?: number;
  pageSize?: number;
  postQueryRequest?: PostQueryRequest;
  sortField?: string;
  sortOrder?: string;
  userId?: number;
};

export type PostQueryRequest = {
  content?: string;
  current?: number;
  favourUserId?: number;
  id?: number;
  notId?: number;
  orTags?: string[];
  pageSize?: number;
  searchText?: string;
  sortField?: string;
  sortOrder?: string;
  tags?: string[];
  title?: string;
  userId?: number;
};

export type PostThumbAddRequest = {
  postId?: number;
};

export type PostUpdateRequest = {
  content?: string;
  id?: number;
  tags?: string[];
  title?: string;
};

export type PostVO = {
  content?: string;
  createTime?: string;
  favourNum?: number;
  hasFavour?: boolean;
  hasThumb?: boolean;
  id?: number;
  tagList?: string[];
  thumbNum?: number;
  title?: string;
  updateTime?: string;
  user?: UserVO;
  userId?: number;
};

export type SearchRequest = {
  current?: number;
  pageSize?: number;
  searchText?: string;
  sortField?: string;
  sortOrder?: string;
  type?: string;
};

export type SearchVO = {
  dateList?: Record<string, unknown>[];
  pictureList?: Picture[];
  postVOList?: PostVO[];
  userVOList?: UserVO[];
};

export type uploadFileUsingPOSTParams = {
  biz?: string;
};

export type User = {
  createTime?: string;
  id?: number;
  isDelete?: number;
  mpOpenId?: string;
  unionId?: string;
  updateTime?: string;
  userAccount?: string;
  userAvatar?: string;
  userEmail?: string;
  userName?: string;
  userPassword?: string;
  userPhone?: string;
  userProfile?: string;
  userRole?: string;
};

export type UserAddRequest = {
  userAccount?: string;
  userAvatar?: string;
  userEmail?: string;
  userName?: string;
  userPhone?: string;
  userProfile?: string;
  userRole?: string;
};

export type UserLoginRequest = {
  userAccount?: string;
  userPassword?: string;
};

export type UserQueryRequest = {
  current?: number;
  id?: number;
  mpOpenId?: string;
  pageSize?: number;
  sortField?: string;
  sortOrder?: string;
  unionId?: string;
  userEmail?: string;
  userName?: string;
  userPhone?: string;
  userProfile?: string;
  userRole?: string;
};

export type UserRegisterRequest = {
  checkPassword?: string;
  userAccount?: string;
  userPassword?: string;
};

export type UserUpdateMyRequest = {
  userAvatar?: string;
  userEmail?: string;
  userName?: string;
  userPhone?: string;
  userProfile?: string;
};

export type UserUpdateRequest = {
  id?: number;
  userAvatar?: string;
  userEmail?: string;
  userName?: string;
  userPhone?: string;
  userProfile?: string;
  userRole?: string;
};

export type UserVO = {
  createTime?: string;
  id?: number;
  userAvatar?: string;
  userName?: string;
  userProfile?: string;
  userRole?: string;
};
