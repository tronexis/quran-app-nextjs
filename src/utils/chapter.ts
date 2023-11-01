import { LocalChapter } from 'data/chapter/type';
import { makeUrl } from './api';
import { Chapter, ChapterInfo } from './types/Chapter';

export const getAllChaptersData = async (
  lang = "en"
): Promise<{
  chapters: Chapter[];
}> => {
  const response = await fetch(makeUrl(`/chapters`, `language=${lang}`), {
    cache: "force-cache",
  });
  const data = await response.json();
  return data;
};

export const getChapterInfo = async (
  chapterId: number,
  lang = "en"
): Promise<{
  chapter_info: ChapterInfo;
}> => {
  const response = await fetch(
    makeUrl(`/chapters/${chapterId}/info`, `language=${lang}`)
  );
  const data = await response.json();
  return data;
};

export const getChapter = async (
  chapterId: number,
  lang = "en"
): Promise<Chapter> => {
  const response = await fetch(
    makeUrl(`/chapters/${chapterId}`, `language=${lang}`)
  );
  const data = await response.json();
  return data.chapter;
};

export const getLocalChapter = (lang = "en"): Promise<LocalChapter[]> => {
  return new Promise((resolve) => {
    import(`../../data/chapter/${lang}.json`).then((data) => {
      const array = Object.keys(data.default).map((key) => ({
        id: parseInt(key),
        verses_count: data.default[key].versesCount,
        name_simple: data.default[key].transliteratedName,
        revelation_place: data.default[key].revelationPlace,
      }));
      resolve(array);
    });
  });
};
