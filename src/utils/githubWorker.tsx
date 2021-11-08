import { RAW_GITHUB_URL, REPO_NAME, CONTENT_PATH } from "../config";
import { getError } from "./error";

export async function fetchRawDoc(doc: string, tag: string) {
  return await getRawFileFromRepo(`${CONTENT_PATH}${doc}`, tag);
}

export async function getRawFileFromGitHub(path: string) {
  const res = await fetch(RAW_GITHUB_URL + path);

  if (res.ok) return res.text();
  throw await getError("GitHub raw download error", res);
}

export function getRawFileFromRepo(path: string, tag: string) {
  return getRawFileFromGitHub(`/${REPO_NAME}/${path}/${tag}`);
}

export function getRawAssetFromRepo(path: string, tag: string) {
  return `${RAW_GITHUB_URL}/${REPO_NAME}/${tag}${path}`;
}
