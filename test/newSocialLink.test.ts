import { newSocialLink } from "../src/utils/initializer";

describe('newSocialLink function', () => {
  test('only title argument', () => {
    const expectedResult = {
      title: "GitHub",
      url: "https://github.com/ghaerdi",
      path: "src/static/icons/github.svg",
      description: "GitHub white icon"
    };

    expect(newSocialLink("GitHub")).toEqual(expectedResult)
  })

  test('title and url arguments', () => {
    const url = "https://linkedin.com/in/ghaerdi";
    const expectedResult = {
      title: "Linkedin",
      path: "src/static/icons/linkedin.svg",
      description: "Linkedin white icon",
      url
    };

    expect(newSocialLink("Linkedin", url)).toEqual(expectedResult)
  })
})
