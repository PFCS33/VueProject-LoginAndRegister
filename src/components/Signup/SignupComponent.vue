<template>
  <form
    @submit.prevent="submitData"
    :class="{
      invalid:
        accountValidity === 'invalid' ||
        emailValidity === 'invalid' ||
        passwordValidity === 'invalid' ||
        confirmPasswordValidity === 'invalid' ||
        inviteCodeValidity === 'invalid',
    }"
  >
    <BaseDialog v-if="!inputIsValid" @close="confirmError" title="无效输入">
      <template #default>
        <p>抱歉，检查到输入数据至少有一个不符合规范</p>
        <p>请再次检查输入</p>
      </template>
      <template #action>
        <BaseButton @click="confirmError">确定</BaseButton>
      </template>
    </BaseDialog>
    <label for="account">
      <scan> 账号 </scan>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="icon"
        :class="{ invalid: accountValidity === 'invalid' }"
      >
        <path
          fill-rule="evenodd"
          d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
          clip-rule="evenodd"
        />
      </svg>
    </label>
    <input
      type="text"
      id="account"
      name="account"
      placeholder=" 账号"
      v-model.trim="accountInput"
      @blur="validateAccountInput"
    />
    <p class="error-msg" v-if="accountValidity === 'invalid'">
      注意：输入不合法
    </p>
    <div v-else class="white-space"></div>
    <label for="email">
      <scan> 邮箱 </scan>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="icon"
      >
        <path
          d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
        />
        <path
          d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
        />
      </svg>
    </label>
    <input
      type="text"
      id="email"
      name="email"
      placeholder=" 邮箱"
      v-model.trim="emailInput"
      @blur="validateEmailInput"
    />
    <p class="error-msg" v-if="emailValidity === 'invalid'">注意：输入不合法</p>
    <div v-else class="white-space"></div>

    <label for="password">
      <scan> 密码 </scan>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="icon"
      >
        <path
          fill-rule="evenodd"
          d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
          clip-rule="evenodd"
        />
      </svg>
    </label>
    <input
      type="text"
      id="password"
      name="password"
      placeholder=" 密码"
      v-model.trim="passwordInput"
      @blur="validatePasswordInput"
    />
    <p class="error-msg" v-if="passwordValidity === 'invalid'">
      注意：输入不合法
    </p>
    <div v-else class="white-space"></div>
    <label for="confirmPassword">
      <scan> 确认密码 </scan>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="icon"
      >
        <path
          fill-rule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clip-rule="evenodd"
        />
      </svg>
    </label>
    <input
      type="text"
      id="confirmPassword"
      name="confirmPassword"
      placeholder=" 确认密码"
      v-model.trim="confirmPasswordInput"
      @blur="validateConfirmPasswordInput"
    />
    <p class="error-msg" v-if="confirmPasswordValidity === 'invalid'">
      注意：输入不合法
    </p>
    <div v-else class="white-space"></div>
    <label for="invideCode">
      <sacn> 邀请码 </sacn>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="icon"
      >
        <path
          d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"
        />
      </svg>
    </label>
    <input
      type="text"
      id="invideCode"
      name="invideCode"
      placeholder=" 邀请码"
      v-model.trim="inviteCodeInput"
      @blur="validateInviteCodeInput"
    />
    <p class="error-msg" v-if="inviteCodeValidity === 'invalid'">
      注意：输入不合法
    </p>
    <div v-else class="white-space"></div>

    <BaseButton class="base-button">注册</BaseButton>
  </form>
</template>

<script>
import BaseDialog from "../UI/BaseDialog.vue";

export default {
  data() {
    return {
      accountInput: "",
      emailInput: "",
      passwordInput: "",
      confirmPasswordInput: "",
      inviteCodeInput: "",
      inputIsValid: true,
      accountValidity: "pending",
      emailValidity: "pending",
      passwordValidity: "pending",
      confirmPasswordValidity: "pending",
      inviteCodeValidity: "pengding",
    };
  },
  methods: {
    submitData() {
      const accountValue = this.accountInput;
      const emailValue = this.emailInput;
      const passwordValue = this.passwordInput;
      const confirmPasswordValue = this.confirmPasswordInput;
      const inviteCodeValue = this.inviteCodeInput;
      //错误检查
      if (
        accountValue === "" ||
        passwordValue === "" ||
        emailValue === "" ||
        confirmPasswordValue === "" ||
        inviteCodeValue === ""
      ) {
        this.inputIsValid = false;
      } else {
        //操作数据
        console.log(accountValue);
        console.log(emailValue);
        console.log(passwordValue);
        console.log(confirmPasswordValue);
        console.log(inviteCodeValue);
        //reset
        this.accountInput = "";
        this.emailInput = "";
        this.passwordInput = "";
        this.confirmPasswordInput = "";
        this.inviteCodeInput = "";
      }
    },
    confirmError() {
      this.inputIsValid = true;
    },
    validateAccountInput() {
      if (this.accountInput === "") {
        this.accountValidity = "invalid";
      } else {
        this.accountValidity = "valid";
      }
    },
    validateEmailInput() {
      if (this.emailInput === "") {
        this.emailValidity = "invalid";
      } else {
        this.emailValidity = "valid";
      }
    },
    validatePasswordInput() {
      if (this.passwordInput === "") {
        this.passwordValidity = "invalid";
      } else {
        this.passwordValidity = "valid";
      }
    },
    validateConfirmPasswordInput() {
      if (this.confirmPasswordInput === "") {
        this.confirmPasswordValidity = "invalid";
      } else {
        this.confirmPasswordValidity = "valid";
      }
    },
    validateInviteCodeInput() {
      if (this.inviteCodeInput === "") {
        this.inviteCodeValidity = "invalid";
      } else {
        this.inviteCodeValidity = "valid";
      }
    },
  },
  components: { BaseDialog },
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: auto 1fr;

  align-items: center;
  column-gap: 8px;

  padding: 36px;
  padding-left: 0;
}
.icon {
  width: 24px;
}

.white-space {
  height: 24px;
  grid-column: 1/-1;
}
input {
  height: 36px;
}
label {
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 2px;
}
.base-button {
  grid-column: 2/-1;
}

.error-msg {
  grid-column: 2/-1;
  margin-bottom: 12px;
  color: #ffc9c9;
}
</style>
