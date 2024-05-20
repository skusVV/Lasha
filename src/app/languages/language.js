import { words as EnglishWords } from './english';
import { words as GeorgianWords } from './georgian';
import { words as SpanishWords } from './spanish';

export const getWords = language => { 
    if(language === 'ENG') {
        return EnglishWords;
    }
    
    if(language === 'ES') {
        return SpanishWords;
    }

    if(language === 'GEO') {
        return GeorgianWords;
    }
}