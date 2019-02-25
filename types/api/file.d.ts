/**
 * @file 文件
 */
declare namespace my {
  interface ISaveFileResult {
    /**
     * 文件的保存路径
     */
    savedFilePath: string;
  }

  interface ISaveFileOptions {
    /**
     * 需要保存的文件的临时路径
     */
    tempFilePath: string;

    /**
     * 返回文件的保存路径，res = {savedFilePath: '文件的保存路径'}
     */
    success?: (res?: ISaveFileResult) => void;

    fail?(): void;

    complete?(): void;
  }

  /**
   * 保存文件到本地。
   */
  function saveFile(options: ISaveFileOptions): void;

  interface IFileListItem {
    /**
     * 文件的本地路径
     */
    filePath: string;

    /**
     * 文件的保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数
     */
    createTime: number;

    /**
     * 文件大小，单位B
     */
    size: number;
  }

  interface IGetSavedFileListResult {
    /**
     * 接口调用结果
     */
    errMsg: string;

    /**
     * 文件列表
     */
    fileList: IFileListItem[];
  }

  interface IGetSavedFileListOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?: (res?: IGetSavedFileListResult) => void;

    fail?(): void;

    complete?(): void;
  }

  /**
   * 获取本地已保存的文件列表
   */
  function getSavedFileList(options: IGetSavedFileListOptions): void;

  interface IGetSavedFileInfoResult {
    /**
     * 接口调用结果
     */
    errMsg: string;

    /**
     * 文件的保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数
     */
    createTime: number;

    /**
     * 文件大小，单位B
     */
    size: number;
  }

  interface IGetSavedFileInfoOptions {
    /**
     * 文件路径
     */
    filePath: string;

    /**
     * 接口调用成功的回调函数
     */
    success?: (res?: IGetSavedFileInfoResult) => void;

    fail?(): void;

    complete?(): void;
  }

  /**
   * 获取本地文件的文件信息
   */
  function getSavedFileInfo(options: IGetSavedFileInfoOptions): void;

  interface IRemoveSavedFileOptions {
    /**
     * 需要删除的文件路径
     */
    filePath: string;

    success?(): void;

    fail?(): void;

    complete?(): void;
  }

  /**
   * 删除本地存储的文件
   */
  function removeSavedFile(options: IRemoveSavedFileOptions): void;

  interface IGetFileInfoOptions {
    apFilePath: string;
    digestAlgorithm?: 'md5' | 'md5';
    success?(res: { size: number; digest: string; }): void;
    fail?(): void;
    complete?(): void;
  }

  function getFileInfo(options: IGetFileInfoOptions): void;
}
