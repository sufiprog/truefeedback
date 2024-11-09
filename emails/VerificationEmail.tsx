import React from 'react';
import {
    Html,
    Head,
    Font,
    Preview,
    Row,
    Section,
    Text,
} from '@react-email/components';

interface VerificationEmailProps {
    username: string;
    otp: string;
}

export default function VerificationEmail({ username, otp }: VerificationEmailProps) {
    return (
        <Html lang="en" dir="ltr">
            <Head>
                <title>Verification Code</title>
                <Font
                    fontFamily="Roboto"
                    fallbackFontFamily="Verdana"
                    webFont={{
                        url: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
                        format: "woff2"
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
            </Head>
            <Preview>Here's your verification code: {otp}</Preview>
            <Section>
                <Row>
                    <Text>
                        Hi {username},
                    </Text>
                </Row>
                <Row>
                    <Text>Thanks for Registering, Please use the following code</Text>
                </Row>
                <Row>
                    <Text>
                        {otp}
                    </Text>
                </Row>
                <Row>
                    <Text>
                        This OTP will expire in 60 minutes.
                    </Text>
                </Row>
            </Section>
        </Html>
    );
}