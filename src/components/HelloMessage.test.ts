import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import HelloMessage from "~/components/HelloMessage.vue";

describe("HelloMessage", () => {
  it("デフォルトの場合はHello, World!が表示されること", () => {
    const wrapper = mount(HelloMessage);

    expect(wrapper.get("h1").text()).toContain("Hello, World!");
  });

  it("引数を渡した場合はそれが表示されること", () => {
    const wrapper = mount(HelloMessage, {
      props: {
        message: "Index page",
      },
    });

    expect(wrapper.get("h1").text()).toContain("Hello, Index page!");
  });

  it("テキストフィールドで編集した場合はそれが表示されること", async () => {
    const wrapper = mount(HelloMessage);

    await wrapper.get("input").setValue("Test");

    expect(wrapper.get("h1").text()).toContain("Hello, Test!");
  });
});
