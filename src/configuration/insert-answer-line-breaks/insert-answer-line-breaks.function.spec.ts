import { expect, Test, TestSuite } from 'testyts';

import { AnswerTypes } from '../../shared/enums/answer-types.enum';
import { insertAnswerLineBreaks } from './insert-answer-line-breaks.function';

@TestSuite()
export class MyTestSuite {
  @Test()
  shouldCorrectlyAddLineBreakers() {
    // Arrange
    const source = 'this line should have';
    const expectedStringWithLineBreakers = 'this line|should|have';

    // Act
    const { text } = insertAnswerLineBreaks({ text: source, type: AnswerTypes.Affirmative });

    // Assert
    expect.toBeEqual(text, expectedStringWithLineBreakers);
  }
}
