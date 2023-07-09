import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames test', () => {
  test('add some class', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional classes', () => {
    const result = 'someClass class1 class2';

    expect(classNames('someClass', {}, ['class1', 'class2']))
      .toBe(result);
  });

  test('with mods true', () => {
    const result = 'someClass hovered class1 class2';

    expect(classNames('someClass', { hovered: true }, ['class1', 'class2']))
      .toBe(result);
  });

  test('with mods false', () => {
    const result = 'someClass hovered class1 class2';

    expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2']))
      .toBe(result);
  });

  test('with mods undefined', () => {
    const result = 'someClass hovered class1 class2';

    expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['class1', 'class2']))
      .toBe(result);
  });
});
