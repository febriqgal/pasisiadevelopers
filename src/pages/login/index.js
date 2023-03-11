import {
  Button,
  Input,
  Modal,
  Text,
  Row,
  Checkbox,
  Spacer,
} from "@nextui-org/react";
import React from "react";
import Styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import IconGoogle from "../../../public/icon-google.svg";
export default function Login() {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const route = useRouter();
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${Styles.center}`}>
        <div className="rounded-2xl border w-96 aspect-square shadow-2xl flex flex-col justify-center items-center">
          <form className="w-full px-14">
            <h1 className="font-bold text-2xl text-center">Login</h1>
            <Spacer y={1} />
            <Input
              css={{ width: "100%" }}
              className="border-2 border-gray-300"
              Placeholder="Email"
            />
            <Spacer y={0.5} />
            <Input.Password
              className="border-2 border-gray-300"
              css={{ width: "100%" }}
              type={"password"}
              Placeholder="Password"
            />
            <Spacer y={0.5} />
            <Button
              bordered
              onPress={handler}
              css={{ width: "100%" }}
              className="text-black hover:-translate-y-1 duration-500 border-gray-300"
            >
              Register
            </Button>
            <Modal
              className="w-96"
              closeButton
              blur
              aria-labelledby="modal-title"
              open={visible}
              onClose={closeHandler}
            >
              <Modal.Header>
                <Text id="modal-title" size={18}>
                  Mendaftar
                </Text>
              </Modal.Header>
              <Modal.Body>
                <Input
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Email"
                />
                <Input
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Password"
                />
                <Row justify="space-between">
                  <Checkbox>
                    <Text size={14}>ingat saya</Text>
                  </Checkbox>
                  <Text size={14}>Lupa password?</Text>
                </Row>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  bordered
                  css={{ width: "100%" }}
                  className="text-black hover:-translate-y-1 duration-500 border-gray-300"
                  auto
                  flat
                  color="error"
                  onPress={closeHandler}
                >
                  Batal
                </Button>
                <Button
                  bordered
                  css={{ width: "100%" }}
                  className="text-black hover:-translate-y-1 duration-500 border-gray-300"
                  auto
                  onPress={closeHandler}
                >
                  Kirim
                </Button>
              </Modal.Footer>
            </Modal>
            <Spacer y={0.5} />
            <Button
              bordered
              onClick={() => {
                route.replace("/", undefined, { shallow: true });
              }}
              css={{ width: "100%" }}
              className="text-black hover:-translate-y-1 duration-500 border-gray-300"
            >
              Login
            </Button>
            <Spacer y={0.25} />
            <h1 className="text-xs text-center">atau</h1>
            <Spacer y={0.25} />
            <Button
              bordered
              onClick={() => {
                route.replace("/", undefined, { shallow: true });
              }}
              css={{ width: "100%" }}
              className="text-black hover:-translate-y-1 duration-500 border-gray-300"
            >
              <div className="flex gap-2 text-xs justify-center items-center">
                <Image height={20} src={IconGoogle} alt={"#"} />
                Masuk dengan Google
              </div>
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
