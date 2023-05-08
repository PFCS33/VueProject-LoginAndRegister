<template>
  <BaseDialog v-if="!inputIsValid" @close="confirmError" title="无效输入">
    <template #default>
      <p>抱歉，检查到输入数据至少有一个不符合规范</p>
      <p>请再次检查输入</p>
    </template>
    <template #action>
      <BaseButton @click="confirmError">确定</BaseButton>
    </template>
  </BaseDialog>
  <form @submit.prevent="submitData">
    <label for="account"
      ><svg
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
      :class="{ invalid: accountValidity === 'invalid' }"
      @blur="validateAccountInput"
    />
    <p class="error-msg" v-if="accountValidity === 'invalid'">
      注意：输入不合法
    </p>
    <div v-else class="white-space"></div>

    <label for="password"
      ><svg
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
      :class="{ invalid: passwordValidity == 'invalid' }"
      @blur="validatePasswordInput"
    />
    <p class="error-msg" v-if="passwordValidity === 'invalid'">
      注意：输入不合法
    </p>
    <div v-else class="white-space"></div>
    <BaseButton class="base-button">登录</BaseButton>
  </form>
</template>

<script>
import BaseDialog from "../UI/BaseDialog.vue";

export default {
  data() {
    return {
      accountInput: "",
      passwordInput: "",
      inputIsValid: true,
      accountValidity: "pending",
      passwordValidity: "pending",
    };
  },
  methods: {
    submitData() {
      const accountValue = this.accountInput;
      const passwordValue = this.passwordInput;

      //错误检查
      if (accountValue === "" || passwordValue === "") {
        this.inputIsValid = false;
      } else {
        //操作数据
        console.log(accountValue);
        console.log(passwordValue);
        //reset
        this.accountInput = "";
        this.passwordInput = "";
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
    validatePasswordInput() {
      if (this.passwordInput === "") {
        this.passwordValidity = "invalid";
      } else {
        this.passwordValidity = "valid";
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
  align-items: stretch;
  column-gap: 12px;
}

.white-space {
  grid-column: 1/-1;
  height: 42px;
}

.base-button {
  grid-column: 1/-1;
}
.icon {
  height: 24px;
  width: 24px;
}
.error-msg {
  grid-column: 2/-1;
  margin-bottom: 30px;
  color: #ffc9c9;
}
.invalid {
  /* border-color: #c92a2a; */
}
label {
  font-size: 1.5rem;
}
input {
  height: 36px;
}
</style>
