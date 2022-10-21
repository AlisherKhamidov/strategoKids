import Data from './types/Data';

export default async function sendApplication(data: Data) : Promise<void> {
    const chatId = '-1001813038228';
    const token = '5717459131:AAGiPPcX2AzJLLN_gaapW1oExQQvKzN2dn8';
    const br = '%0A'; // перенос строки

    const text = `имя ребёнка: ${data.kidName} ${br}дата рождения: ${data.birthDate} ${br}имя родителя: ${data.parentName} ${br}телефон: ${data.phone} ${br}опыт игры: ${data.experience}`;
    await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}=@stratego_kids&parse_mode=HTML&text=${text}`);
      }
