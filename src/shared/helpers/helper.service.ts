class Helper {
  static responseHandler(response: any) {
    const output: {
      status: boolean;
      data?: any;
      message: string;
    } = response.data;

    // tslint:disable-next-line: no-console
    console.log(output);
    if (output.status) {
      return output;
    }

    throw output;
  }
}
